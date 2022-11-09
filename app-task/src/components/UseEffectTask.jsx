import React, { useEffect, useState } from "react";
import BooksData from "../BooksData.json";
import { CardBook } from "./CardBook";
import { Search } from "./Search";

function UseEffectTask() {
    const [search, setSearch] = useState("");
    const [price, setPrice] = useState(0);
    const [showBook, setShowBook] = useState([]);

    useEffect(() => {
        setShowBook(BooksData.eBooks);
    }, []);

    useEffect(() => {
        setShowBook(
            BooksData.eBooks.filter(ele => {
                return ele.language.toLowerCase().includes(search) &&
                    price <= ele.price &&
                    ele.price <= 35
                    ? true
                    : false;
            })
        );
    }, [price, search]);

    const handleSearch = value => {
        setSearch(value.trim());
    };
    const handlePrice = value => {
        setPrice(value);
    };

    return (
        <>
            <Search
                handleSearch={handleSearch}
                handlePrice={handlePrice}
                price={price}
                totalBooks={showBook.length}
            />
            <div className="row justify-content-center">
                {showBook.map((ele, index) => (
                    <CardBook key={index} data={ele} />
                ))}
            </div>
        </>
    );
}

export default UseEffectTask;
