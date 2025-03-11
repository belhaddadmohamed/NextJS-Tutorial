import React from 'react';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    const handlePrevious = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(
                <button
                    key={i}
                    onClick={() => onPageChange(i)}
                    className={`px-3 py-1 ${i === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
                    {i}
                </button>
            );
        }
        return pageNumbers;
    };

    return (
        <div className="flex items-center space-x-2">
            {/* Previous */}
            <button
                onClick={handlePrevious}
                disabled={currentPage === 1}
                className="px-3 py-1 bg-gray-200">
                Previous
            </button>

            {/* Pages */}
            {renderPageNumbers()}

            {/* Next */}
            <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className="px-3 py-1 bg-gray-200">
                Next
            </button>
        </div>
    );
};

export default Pagination;