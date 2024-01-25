import Image from "next/image";
import "./card.css"

const Cards = (data: any) => {
    return (
        <>
            <div className="card text-center">
                <Image src={data.image} alt={data.name} className="card-img-top" />
                <div className="card-body">
                    <p className="card-title mx-3">
                        {data.name}
                    </p>
                    <p className="card-text">
                        Rp. {data.price}
                    </p>
                    <p className="card-text">
                        {data.stock} Bowls available
                    </p>
                </div>
            </div>
        </>
    )
}

export default Cards