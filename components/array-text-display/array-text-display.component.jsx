const ArrayTextDisplay = ({ title, contents }) => {
  return (
    <p>
      {title}:{" "}
      {contents.map((content, index) => {
        return (
          <span key={content}>
            {content}
            {index !== contents.length - 1 ? ", " : ""}
          </span>
        );
      })}
    </p>
  );
};

export default ArrayTextDisplay;
