import {useState, useEffect} from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
} from "@nextui-org/react";
import { FaShoppingBag } from "react-icons/fa";
import { Input } from "@nextui-org/react";
import { IoSearch } from "react-icons/io5";
import Loader from "./Loader";
import axios from "../axios.js";

const Products = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const res = await axios.get("/api/v1/products/fetch");
        console.log(res);
        setProducts(res.data);
        console.log(products);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);
  
  return (
    <div className="m-10">
      {isLoading ? <Loader width="500px" height="250px" /> : null}
      <div className="flex items-center justify-center gap-5 m-5">
        <div className="m-5 text-xl lg:text-3xl font-[700]">Products</div>

        <div className="hidden mr-5 lg:block">
          <Input
            isClearable
            radius="lg"
            classNames={{
              label: "text-black/50",
              input: [
                "bg-transparent",
                "text-black/90",
                "placeholder:text-default-700/50",
              ],
              innerWrapper: "bg-transparent",
              inputWrapper: [
                "shadow-xl",
                "backdrop-blur-xl",
                "backdrop-saturate-200",
                "hover:bg-default-200/70",
                "dark:hover:bg-default/70",
                "group-data-[focused=true]:bg-default-200/50",
                "dark:group-data-[focused=true]:bg-default/60",
                "!cursor-text",
              ],
            }}
            placeholder="Type to search..."
            startContent={
              <IoSearch className="text-black/50 mb-0.5 text-slate-400 pointer-events-none flex-shrink-0 w-[40px] " />
            }
          />
        </div>
        <div>
          <FaShoppingBag />
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-6">
        {products?.fetchProducts?.map((item, index) => (
          <Card
            shadow="sm"
            key={index}
            isPressable
            className="lg:w-[250px] lg:h-[300px] w-[150px] h-[200px]"
          >
            <CardBody className="p-0 overflow-visible">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={item.title}
                className="lg:w-[250px] object-cover lg:h-[250px] w-[150px] h-[150px]"
                src={item.img}
              />
            </CardBody>
            <CardFooter className="justify-between text-small">
              <b>{item.title}</b>
              <p className="text-default-500">₹ {item.price} /-</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Products;
