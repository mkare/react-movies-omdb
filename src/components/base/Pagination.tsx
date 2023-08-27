import cn from "classnames";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  alignment?: "left" | "center" | "right";
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  alignment = "left",
  onPageChange,
}: PaginationProps) {
  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    if (
      i === 1 ||
      i === totalPages ||
      (i >= currentPage - 2 && i <= currentPage + 2)
    ) {
      pages.push(i);
    }
  }

  const handlePageClick = (page: number) => {
    if (page !== currentPage) {
      onPageChange(page);
    }
  };

  return (
    <div
      className={cn(
        "flex my-6",
        alignment === "left" && "justify-start",
        alignment === "center" && "justify-center",
        alignment === "right" && "justify-end"
      )}
    >
      <button
        className={cn(
          "rounded-l border border-gray-300 px-4 py-2",
          currentPage === 1 && "cursor-not-allowed bg-gray-200",
          currentPage !== 1 && "bg-white hover:bg-gray-100"
        )}
        onClick={() => handlePageClick(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {pages.map((page) => {
        const isActive = currentPage === page;
        const isDisabled = page < 1 || page > totalPages;
        return (
          <button
            key={page}
            className={cn(
              "border border-gray-300 px-4 py-2",
              isActive && "bg-blue-500 text-white",
              !isActive && !isDisabled && "bg-white hover:bg-gray-100",
              isDisabled && "cursor-not-allowed bg-gray-200"
            )}
            onClick={() => handlePageClick(page)}
            disabled={isDisabled}
          >
            {page}
          </button>
        );
      })}
      <button
        className={cn(
          "rounded-r border border-gray-300 px-4 py-2",
          currentPage === totalPages && "cursor-not-allowed bg-gray-200",
          currentPage !== totalPages && "bg-white hover:bg-gray-100"
        )}
        onClick={() => handlePageClick(currentPage + 1)}
        disabled={currentPage === totalPages} // Fixed: Disabling is based on currentPage value
      >
        Next
      </button>
    </div>
  );
}
