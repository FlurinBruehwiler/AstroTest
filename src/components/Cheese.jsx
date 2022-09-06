export default (props) => {
  return (
    <a href={props.url} key={props.id+props.isSearching}>
      <p>{props.title}</p>
      <p>{props.description}</p>
      <img src={props.image} alt={props.title} />
    </a>
  );
};
