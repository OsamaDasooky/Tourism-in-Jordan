import React from "react";

export const TranslateInput = ({ data, name, type, handleFunction }) => {
    return (
        <div className="col-lg-4">
            <span>{type}</span>
            <span>
                <select
                    className="col-2"
                    name="languages"
                    id="languages"
                    onChange={e => {
                        handleFunction[1](e.target.value);
                    }}
                >
                    {data.map((ele, ind) => (
                        <option key={"lang" + ind} value={ele.code}>
                            {ele.code}
                            {ele.name}
                        </option>
                    ))}
                </select>
            </span>
            <input
                className="form-control col-lg-5 "
                type="text"
                placeholder={name}
                aria-label="Search"
                onChange={e => handleFunction[0](e.target.value)}
            />
        </div>
    );
};
