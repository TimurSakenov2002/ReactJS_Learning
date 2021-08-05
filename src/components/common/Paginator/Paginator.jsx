import s from "./Paginator.module.css";

function Paginator({totalUsersCount, pageSize, currentPage, onPageChanged}) {

    //let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize) //чтобы показать абсолютно всех юзеров
    let pagesCount = Math.ceil(totalUsersCount >= 10 ? 10 : pageSize) //чтобы показать максимум 10 страниц с юзерами
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div>
            <div>
                {pages.map(p => {
                    return (
                        <span className={currentPage === p && s.selectedPage}
                              onClick={(e) => {
                                  onPageChanged(p);
                              }}><span className={s.selectButton}>{" "}{p}</span></span>
                    )
                })}
            </div>
        </div>
    )
}

export default Paginator;