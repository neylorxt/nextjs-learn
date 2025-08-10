'use client';

import { useParams, useRouter } from 'next/navigation';
import { products } from '../_data/data';
import Link from 'next/link';

const Product = () => {
    const { id } = useParams<{ id: string }>();
    const router = useRouter();
    const product = products.find(p => p.id === Number(id));

    if (!product) return <div className="py-20 text-center space-y-4">
        <h1 className="text-3xl font-bold">Produit introuvable</h1>
        <Link href="/" className="btn btn-primary">Retour à l&apos;accueil</Link>
    </div>

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="grid gap-8 lg:grid-cols-2 items-start">
                {/* Image Section */}
                <div className="space-y-4">
                    <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 shadow-2xl">
                        <img
                            src={product.url}
                            alt={product.title}
                            className="object-cover transition-transform duration-500 hover:scale-105 h-full"
                        />
                        <div className="absolute inset-0 bg-black/5 hover:bg-black/0 transition-colors duration-300"></div>
                    </div>
                    <div className="flex gap-2 justify-center">
                        {[...Array(3)].map((_, i) => (
                            <div key={i} className="relative w-16 h-16 rounded-xl bg-gray-100 border-2 border-transparent hover:border-primary cursor-pointer transition-colors overflow-hidden">
                                <img
                                    src={product.url}
                                    alt=""
                                    className="object-cover opacity-80 hover:opacity-100  h-full"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Product Info Section */}
                <div className="space-y-8">
                    {/* Header */}
                    <div className="space-y-4">
                        <button
                            onClick={() => router.back()}
                            className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-primary transition-colors group"
                        >
                            <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Retour
                        </button>

                        <div className="space-y-3">
                            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-gray-100 to-gray-700 bg-clip-text text-transparent">
                                {product.title}
                            </h1>
                            <div className="flex items-center gap-2">
                                <div className="flex text-yellow-400">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                        </svg>
                                    ))}
                                </div>
                                <span className="text-sm text-gray-400">(128 avis)</span>
                            </div>
                        </div>
                    </div>

                    {/* Description */}
                    <div className="space-y-4">
                        <p className="text-lg text-gray-400 leading-relaxed">
                            {product.description} avec une qualité exceptionnelle et une garantie satisfaction.
                        </p>

                        {/* Features */}
                        <div className="flex flex-wrap gap-2">
                            {['Qualité premium', 'Livraison 48h', 'Garantie 2 ans'].map((feature) => (
                                <span key={feature} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium">
                                    {feature}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Price */}
                    <div className="space-y-2">
                        <div className="flex items-baseline gap-3">
                            <span className="text-4xl font-bold text-primary">€{(product.id * 9 + 19).toFixed(2)}</span>
                            <span className="text-xl text-gray-500 line-through">€{(product.id * 9 + 35).toFixed(2)}</span>
                        </div>
                        <p className="text-sm text-green-600 font-medium">🚚 Livraison gratuite</p>
                    </div>

                    {/* Actions */}
                    <div className="space-y-4">
                        <div className="flex gap-3">
                            <button className="flex-1 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-200 hover:shadow-lg hover:scale-105 flex items-center justify-center gap-2">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 7.5M7 13v6a2 2 0 002 2h6a2 2 0 002-2v-6" />
                                </svg>
                                Ajouter au panier
                            </button>
                            <button className="px-6 py-4 border-2 border-gray-200 hover:border-red-300 text-gray-700 hover:text-red-500 rounded-2xl transition-all duration-200 hover:shadow-md">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.682l-1.318-1.364a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </button>
                        </div>

                        <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 px-8 py-3 rounded-xl font-medium transition-colors duration-200">
                            Acheter maintenant
                        </button>
                    </div>

                    {/* Product Details */}
                    <div className="space-y-6 pt-8 border-t border-gray-200">
                        <h3 className="text-xl font-semibold text-gray-400">Détails du produit</h3>

                        <div className="grid gap-4">
                            <div className="space-y-3">
                                <p className="text-gray-400 leading-relaxed">
                                    Ce produit est conçu pour offrir les meilleures performances dans sa catégorie.
                                    Matériaux durables et design moderne.
                                </p>
                            </div>

                            <div className="grid gap-3">
                                {[
                                    { icon: '✨', title: 'Qualité premium', desc: 'Matériaux haut de gamme' },
                                    { icon: '🚀', title: 'Livraison rapide', desc: 'Expédition sous 24h' },
                                    { icon: '💬', title: 'Support 24/7', desc: 'Assistance dédiée' }
                                ].map((item) => (
                                    <div key={item.title} className="flex items-start gap-3 p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                                        <span className="text-2xl">{item.icon}</span>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">{item.title}</h4>
                                            <p className="text-sm text-gray-600">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product;