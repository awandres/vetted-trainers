

class VirtualTrainingForm extends React.Component {
  componentDidMount() {
  	const script = document.createElement('script');
    script.src = 'https://js.hsforms.net/forms/v2.js';
    document.body.appendChild(script);

    script.addEventListener('load', () => {

    	if(window.hbspt) {
      	window.hbspt.forms.create({
        	portalId: '7981288',
          formId: '7ac145ab-e4dd-42e0-b402-c5b003b21446',
          target: '#virtualTrainingForm'
        })
      }
    });
  }


	render() {
  	return (
  		<div>
  		  <div id="virtualTrainingForm"></div>
  		</div>
    );
  }
}

export default VirtualTrainingForm
