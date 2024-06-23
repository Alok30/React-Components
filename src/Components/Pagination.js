import './index.css'

const Pagination = ({
    pageSize,
    currentPage,
    totalRecords,
    onPageChange,
}) => {

    const pages = Math.ceil(totalRecords / pageSize);
    // const pageNumbers = [];
    // for (var i = 0; i < pages; i++) {
    //     pageNumbers.push(i);
    // };
    // const visiablePages= Math.min(10,pages);

     const pageNumbers = Array.from({length:pages-currentPage},(_,i)=>i)
     console.log(pageNumbers,'pageNumbers');
    return (
        <ul className="pagination">
            {
                pageNumbers.map(page => {
                    return (
                        <li className='pagination-list' key={page}>
                            <a href="#"
                                onClick={(e) => {
                                    console.log(page)
                                    e.preventDefault();
                                    onPageChange(page);
                                }}
                            >{page+1}</a>
                        </li>
                    )
                })
             
            }
               {totalRecords > 100 && (
                    <li className='pagination-list'>
                        <a href="#" onClick={(e) => { e.preventDefault(); onPageChange(10); }}> &gt; </a>
                    </li>
                )}
        </ul>
    )
};


export default Pagination;