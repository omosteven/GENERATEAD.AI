import { useState } from "react";
import Icon from "../Icon";
import "./Paginate.scss";

interface Arrow {
  isRight?: boolean;
  useIcon?: boolean;
  value: number;
  text?: string;
  isCurrent?: boolean;
  onClick?: Function;
  isDisabled?: boolean;
}

interface Props {
  totalItems: number;
  pageSize: number;
  onResult?: Function;
  currentPage?: number;
}

const PaginateBlock = (props: Arrow) => {
  const { isRight, useIcon, value, text, isCurrent, onClick, isDisabled } =
    props;

  const handleDisabled = () => {};

  return (
    <div
      className={`custom-paginate-blocK ${
        isCurrent ? "custom-paginate__current-block" : ""
      } ${isDisabled ? "custom-paginate__disabled-block" : ""}`}
      onClick={
        !isDisabled
          ? () => onClick?.(value, useIcon ? true : false)
          : () => handleDisabled()
      }
    >
      {useIcon ? (
        <Icon icon={isRight ? "next" : "back"} />
      ) : (
        <span>{value ? value : text}</span>
      )}
    </div>
  );
};

const Paginate = (props: Props) => {
  const { totalItems, pageSize, onResult } = props;

  const [currentPage, setCurrentPage] = useState(
    props?.currentPage ? props?.currentPage : 1
  );

  const totalPages = (totalItems / pageSize) | 0;

  const handleClick = (value: number, isNavigation: boolean) => {
    isNavigation ? setCurrentPage(value) : setCurrentPage(value);

    onResult?.({ totalItems, pageSize, currentPage: value });
  };

  const pageShowLimit = 10;

  return (
    <>
      <div className="custom-paginate">
        <div>
          <PaginateBlock
            onClick={handleClick}
            value={currentPage - 1}
            useIcon
            isDisabled={currentPage === 1}
          />

          {Array.from(
            Array(
              totalPages > pageShowLimit ? pageShowLimit : totalPages - 1
            ).keys()
          ).map((key) => (
            <PaginateBlock
              value={key + 1}
              isCurrent={currentPage === key + 1}
              onClick={handleClick}
              key={key}
            />
          ))}

          {totalPages > pageShowLimit && (
            <PaginateBlock
              value={0}
              text={`..${
                currentPage > pageShowLimit && currentPage < totalPages
                  ? currentPage
                  : ""
              }`}
              isCurrent={
                currentPage > pageShowLimit && currentPage < totalPages
              }
            />
          )}

          <PaginateBlock
            value={totalPages}
            isCurrent={currentPage === totalPages}
            onClick={handleClick}
          />

          <PaginateBlock
            onClick={handleClick}
            value={currentPage + 1}
            isDisabled={currentPage === totalPages}
            useIcon
            isRight
          />
        </div>
      </div>
    </>
  );
};

export default Paginate;
