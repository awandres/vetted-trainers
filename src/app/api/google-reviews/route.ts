import { NextResponse } from "next/server";

// Google Places API configuration
const GOOGLE_API_KEY = process.env.GOOGLE_PLACES_API_KEY || "";
const GOOGLE_PLACE_ID = process.env.GOOGLE_PLACE_ID || "ChIJAeDjCAfbyYkRjxmYjYiATKU"; // Vetted Trainers Place ID

interface GoogleReview {
  author_name: string;
  rating: number;
  text: string;
  relative_time_description: string;
  profile_photo_url?: string;
  time?: number;
}

interface PlacesResponse {
  result: {
    name: string;
    rating: number;
    user_ratings_total: number;
    reviews: GoogleReview[];
  };
  status: string;
}

// Fallback reviews only used when API is unavailable
const fallbackReviews: GoogleReview[] = [
  {
    author_name: "Cathy Watkins",
    rating: 5,
    text: "Vetted Trainers knowledge of the human body is beyond amazing. They helped me complete a goal of competing in my first-ever U.S. Strong Woman competition. Without them I would have never challenged myself and succeeded!",
    relative_time_description: "6 months ago",
  },
  {
    author_name: "Charlie C",
    rating: 5,
    text: "Vetted Trainers is an important part of my life. Without them I doubt my 66 year old body would feel as good after rowing 240 miles of the Colorado River through Grand Canyon.",
    relative_time_description: "8 months ago",
  },
  {
    author_name: "Betty D",
    rating: 5,
    text: "I have become stronger, more flexible, and I feel super healthy since working with Vetted Trainers in my truly individualized program. They are the best—and also, it's fun!",
    relative_time_description: "10 months ago",
  },
  {
    author_name: "Simon K",
    rating: 5,
    text: "Joel and Vetted Trainers takes a holistic approach to building strength and injury recovery. After I tore my meniscus, Joel developed a program that focused on mobility, muscle releases, and strength training. I can't recommend him enough!",
    relative_time_description: "1 year ago",
  },
  {
    author_name: "Colleen Q",
    rating: 5,
    text: "I have worked with Vetted Trainers on several occasions. Joel designed a great fitness program that has improved my overall health. Also, when various musculoskeletal issues related to sports and exercise have arisen, Vetted Trainers has solved a number of my issues. I highly recommend them.",
    relative_time_description: "1 year ago",
  },
];

export async function GET(request: Request) {
  // Get place ID from query params or use default
  const { searchParams } = new URL(request.url);
  const placeId = searchParams.get("placeId") || GOOGLE_PLACE_ID;

  // If no API key is configured, return fallback data
  if (!GOOGLE_API_KEY) {
    return NextResponse.json({
      rating: 5.0,
      user_ratings_total: 248,
      reviews: fallbackReviews,
      source: "fallback",
    });
  }

  try {
    // Fetch place details including reviews from Google Places API
    // Note: Google Places API returns a maximum of 5 reviews
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,user_ratings_total,reviews&reviews_sort=newest&key=${GOOGLE_API_KEY}`;

    const response = await fetch(url, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
      throw new Error(`Google API responded with status: ${response.status}`);
    }

    const data: PlacesResponse = await response.json();

    if (data.status !== "OK") {
      throw new Error(`Google Places API error: ${data.status}`);
    }

    // Preferred reviewers to show (these are high-quality, detailed reviews)
    // Listed in exact display order
    const preferredReviewers = [
      "bonnie swanson",
      "sandie lynch", 
      "tami ridgway",
      "carol tressler"
    ];

    // Filter out inappropriate names, employees, and low ratings
    const validReviews = data.result.reviews
      ?.filter((review) => review.rating >= 4)
      ?.filter((review) => !review.author_name.toLowerCase().includes("nutz"))
      ?.filter((review) => !review.author_name.toLowerCase().includes("joey bomango")) || [];

    // Sort preferred reviewers in the exact order specified, then add others
    const preferredReviews = preferredReviewers
      .map((name) => validReviews.find((r) => r.author_name.toLowerCase() === name))
      .filter((r): r is GoogleReview => r !== undefined);
    
    const otherReviews = validReviews.filter((review) =>
      !preferredReviewers.includes(review.author_name.toLowerCase())
    );
    
    // Combine: preferred first (in specified order), then others
    const liveReviews = [...preferredReviews, ...otherReviews];

    return NextResponse.json({
      rating: data.result.rating,
      user_ratings_total: data.result.user_ratings_total,
      reviews: liveReviews, // Return only live Google reviews (max 5)
      source: "google",
    });
  } catch (error) {
    console.error("Error fetching Google reviews:", error);

    // Return fallback data on error
    return NextResponse.json(
      {
        rating: 5.0,
        user_ratings_total: 248,
        reviews: fallbackReviews,
        source: "fallback",
        error: "Failed to fetch live reviews",
      },
      { status: 200 } // Return 200 even on error since we have fallback data
    );
  }
}

