import { NextApiRequest, NextApiResponse } from "next";
import { useProductLists } from "@/hooks/useProductLists";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const { allProducts } = useProductLists();
  const product = allProducts[Number(id)];

  if (!id) {
    return res.status(400).json({ message: "Produc not found" });
  }
  res.status(200).json(product);
}
