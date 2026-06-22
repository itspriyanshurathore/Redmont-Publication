import { useParams } from "react-router-dom";

const BookDetails = () => {
  const { id } = useParams();

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      {/* <h1 className="text-4xl font-bold">
        Book Details {id}
      </h1> */}
       <h1 className="mt-3 text-[38px] font-bold leading-[1.2] text-[#071739]">
               Book{" "}
              <span className="bg-gradient-to-r from-red-600 to-blue-700 bg-clip-text text-transparent">
                Details {id}
              </span>
            </h1>
    </div>
  );
};

export default BookDetails;