import { useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard";
import { GetAllUserWishlist } from "../services/property";
import { toast } from "react-toastify";

function WishlistPage() {
  const [Wishlist, SetWishlist] = useState([]);
  const fetchData = async () => {
    try {
      const result = await GetAllUserWishlist(); // Backend Integration
      if (result.status === 200) {
        const data = result.data;
        return data;
      } else {
        toast.warning("No Wishlist Element Found");
        return [];
      }
    } catch (error) {
      toast.error("Error fetching Wishlist data");
      return [];
    }
  };

  useEffect(() => {
    (async () => {
      const prop = await fetchData();
      SetWishlist([...prop]);
    })();
  }, []);

  return (
    <div>
      <h1 className="centered mt-3">WishList Page</h1>
      <div className="container">
        <div className="row">
          {Wishlist.length === 0 ? (
            <h1 className="centered mt-3">User Has No Wishlist Elements</h1>
          ) : (
            Wishlist.map((wishlist) => {
              return (
                <div className="col m-4">
                  <ProductCard
                    page={{ name: "wishlist" }}
                    id={wishlist.property.id}
                    title={wishlist.property.title}
                    description={wishlist.property.description}
                    price={wishlist.property.price}
                    owner={wishlist.owner}
                  />
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default WishlistPage;
