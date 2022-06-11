type Props = {
  id: number;
  title: string;
  place: string;
};

const Event = ({ id, title, place }: Props) => {
  return (
    <div>
      <div>{id}</div>
      <div>{title}</div>
      <div>{place}</div>
    </div>
  );
};

export { Event };
