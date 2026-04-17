import { FaStar, FaEye, FaShareAlt, FaBookmark } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const {
    title,
    details,
    image_url,
    total_view,
    rating,
    author,
  } = news;

  const formattedDate = new Date(author.published_date).toDateString();

  return (
    <div className="bg-white rounded-md shadow-md overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-gray-100">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h4 className="font-semibold text-sm">{author.name}</h4>
            <p className="text-xs text-gray-500">{formattedDate}</p>
          </div>
        </div>

        <div className="flex gap-3 text-gray-500">
          <FaBookmark className="cursor-pointer" />
          <FaShareAlt className="cursor-pointer" />
        </div>
      </div>

      {/* Title */}
      <div className="p-4">
        <h2 className="text-lg font-bold leading-snug">{title}</h2>
      </div>

      {/* Image */}
      <div className="px-4">
        <img
          src={image_url}
          alt="news"
          className="w-full h-52 object-cover rounded-lg"
        />
      </div>

      {/* Details */}
      <div className="p-4 border-b border-base-200 mb-5">
        <p className="text-sm text-gray-600">
          {details.length > 150
            ? details.slice(0, 150) + "..."
            : details}
        </p>
        <button className="text-orange-500 font-semibold mt-2">
          Read More
        </button>
      </div>


      {/* Footer */}
      <div className="flex items-center justify-between px-4 pb-4">
        {/* Rating */}
        <div className="flex items-center gap-1 text-orange-400">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={i < rating.number ? "" : "text-gray-300"}
            />
          ))}
          <span className="text-gray-700 ml-2 text-sm">
            {rating.number}.0
          </span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-1 text-gray-500 text-sm">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;