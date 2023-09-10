const Header = ({ mainTitle, title, subTitle }) => {
  return (
    <div className="flex flex-col  justify-center items-center px-5">
      <div className="md:w-1/2 flex flex-col  justify-center items-center ">
        <h3 className="text-secondary font-bold text-4xl my-2">
          <span className="text-primary">{mainTitle}</span> &nbsp;
          {title}
        </h3>
        <p className="text-subsidery font-semibold text-md text-center">
          {subTitle}
        </p>
      </div>
    </div>
  );
};

export default Header;
