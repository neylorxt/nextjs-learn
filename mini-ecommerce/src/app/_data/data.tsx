export interface cardData {
    id: number,
    url: string,
    title: string,
    description: string
}


export const products: cardData[] = [
    {
        id: 1,
        url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
        title: "Casque",
        description: "Casque audio sans fil"
    },
    {
        id: 2,
        url: "https://colorlib.com/wp/wp-content/uploads/sites/2/7_product-mockup.jpg",
        title: "Cosmetic",
        description: "Maquillage de haute qualité"
    },
    {
        id: 3,
        url: "https://colorlib.com/wp/wp-content/uploads/sites/2/featured-product-mockup.jpg",
        title: "Cha Seeds",
        description: "Graines de chia"
    },
    {
        id: 4,
        url: "https://colorlib.com/wp/wp-content/uploads/sites/2/14_product-mockup.jpg",
        title: "Ice Cream",
        description: "Crème glacée"
    },
    {
        id: 5,
        url: "https://www.dusanholovej.com/files/layout/img/blog/TUTORIAL-Shampoo-and-Shower-Gel.jpg",
        title: "Live +421",
        description: "Shampooing et gel douche"
    }
]