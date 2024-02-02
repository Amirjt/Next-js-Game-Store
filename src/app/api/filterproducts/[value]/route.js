import connectToDb from "@/configs/db";
import productModel from "@/models/Product";

export const GET = async (req , { params }) => {
    const { value } = params;
    connectToDb();

    let products;

    if (value === "All") {
        products = await productModel.find({});
    } else {
        const categoryFilter = value === "LOW" || value === "HIGH" ? {} : { category: value };
        const sortOption = value === "LOW" ? { price: 1 } : value === "HIGH" ? { price: -1 } : {};

        products = await productModel.find(categoryFilter).sort(sortOption);
    }

    return Response.json(products, {
        status: 200,
    });
};
