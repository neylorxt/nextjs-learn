import Link from "next/link";
import { cardData } from "../_data/data";

type card = {
	item: cardData
}

const CarouselItem: React.FC<card> = ({ item }) => {

	const content = (
		<>
			<div className="carousel-item group">
				<div className="card w-72 md:w-80 bg-base-100/80 backdrop-blur border border-base-200 hover:border-brand-300 transition shadow-sm hover:shadow-md overflow-hidden">
					<div className="relative aspect-[4/3]">
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img src={item.url} alt={item.title} className="object-cover group-hover:scale-105 transition-transform" />
					</div>
					<div className="card-body p-4 gap-3">
						<h3 className="font-semibold line-clamp-1">{item.title}</h3>
						<p className="text-sm text-neutral-300 line-clamp-2">{item.description}</p>
						<div className="card-actions justify-end">
							<button className="btn btn-primary btn-sm">Acheter</button>
						</div>
					</div>
				</div>
			</div>
		</>

	);


	return <>
		{/* Carousel Item */}
		<Link href={`/${item.id}`}>
			{content}
		</Link>
	</>
}


export default CarouselItem;