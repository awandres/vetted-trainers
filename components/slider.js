import homeStyles from '../styles/home.module.css'
const testimonials = [{
name: 'Cathy Watkins',
review: 'Vetted Trainers knowledge of the human body is beyond amazing. They helped me complete a goal of competing in my first-ever U.S. Strong Woman competition. Without him I would have never challenged myself and succeeded!',
img: "/images/cathy-testimonial.jpg"
},

{
name:"Colleen Q",
review:"I have worked with Vetted Trainers on several occasions. Joel designed a great fitness program that has improved my overall health. Also, when various musculoskeletal issues related to sports and exercise have arisen, Vetted Trainers , with their phenomenal knowledge of kinesiology, has solved a number of my issues. Throughout my program, Joel is a great motivator, and always offers options for improvement at my own level. This level of customized service is hard to find in today's fitness arena. I highly recommend Vetted Trainers. ",
},
{
name: "Simon K",
review: "Joel and Vetted Trainers takes a wholistic approach to building strength and Injury recovery. Their wealth of knowledge allows them to make custom tailored programs to your specific needs. After I tore my meniscus, Joel developed a program that focused on mobility, muscle releases, and strength training to break down the scar tissue in my knee and increase mobility. Once I had a strong foundation, Joel's training built up the strength in my knee and helped prevent injuries in the future. I can't recommend him enough! "
},
{
name: "Charlie C",
review: "Vetted Trainers is an important part of my life. Without him I doubt My 66 year old body would feel as good after rowing 240 miles of the Colorado River through Grand Canyon. "
},
{
name: "Betty D",
review: "I have become stronger, more flexible, and I feel super healthy since working with Vetted Trainers in my truly individualized program. Vetted Trainers are the best—and also, it’s fun! "
}]

class Slider extends React.Component {




constructor(props) {
super(props);
this.state = ({
  activeIndex: 0,
 });

this.nextTestimonial = this.nextTestimonial.bind(this);

this.prevTestimonial = this.prevTestimonial.bind(this);

}


nextTestimonial() {
  console.log('initial index = ' + this.state.activeIndex)
  if (this.state.activeIndex == 4) {
    this.setState({activeIndex:0})
  }
  else {
  this.setState({activeIndex: this.state.activeIndex+1})
  console.log('new index = ' + this.state.activeIndex)
}
}

prevTestimonial() {
  console.log('initial index = ' + this.state.activeIndex)
  if (this.state.activeIndex == 0) {
    this.setState({activeIndex:4})
  }
  else {
  this.setState({activeIndex: this.state.activeIndex-1})
  console.log('new index = ' + this.state.activeIndex)
}
}






	render() {
  	return (
      <section className={homeStyles.testimonialsContainer}>
      <div className={homeStyles.testimonials}>
      <h1 className={homeStyles.contentHeader}>Customer Reviews</h1>

      <hr className={homeStyles.divider} />

      <div className={homeStyles.sliderDiv}>
      <h3>{testimonials[this.state.activeIndex].name}</h3>
      <p>"{testimonials[this.state.activeIndex].review}"</p>
      <div className={homeStyles.arrowDiv}>
        <img className={homeStyles.arrow} onClick={this.prevTestimonial} src="/images/back.png" />
        <img className={homeStyles.arrow} onClick={this.nextTestimonial} src="/images/next.png" />
       </div>

      <img src={testimonials[this.state.activeIndex].img} className={homeStyles.testimonialPic} />

      </div>
      </div>
      </section>
    );
  }
}

export default Slider
