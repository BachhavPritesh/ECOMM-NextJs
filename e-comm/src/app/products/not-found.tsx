import { notFound } from "next/navigation";

export default async function ProductPage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;

	const response = await fetch(`https://fakestoreapi.com/products/${id}`);

	if (!response.ok) {
		notFound();
	}

	const product = await response.json();

	if (!product) {
		notFound();
	}

	return (
		<div>
			<h1>{product.title}</h1>
		</div>
	);
}