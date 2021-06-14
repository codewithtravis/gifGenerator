import Card from './Card';

function CardList(props){

	let Component = props.array.map((data, i) => {
		return(
			<div>
				<Card 
				key ={i}
                title={data.title}
				url={data.images.original.url}
				/>
			</div>
		);
	})

	return(
		<div>
		 {Component}
		</div>
	);
}
export default CardList;