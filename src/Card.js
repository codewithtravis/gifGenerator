function Card(props){

	return(
        <div className = 'tc'>
		<div className='tc bg-light-yellow dib br3 ma2 grow bw2 shadow-5'>
			<h2>{props.title}</h2>
			<img src={props.url} alt='image'/>
		</div>
        </div>
	);
}
export default Card;