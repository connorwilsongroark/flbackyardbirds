export default function ShapeSelector(props) {
  // const birdShapes = ["perching", "tree-clinging", "pigeon-like"];
  const birdShapes = [
    { id: "1", icon: "./svg/perching.svg", title: "perching" },
    { id: "2", icon: "./svg/tree-clinging.svg", title: "tree-clinging" },
    { id: "3", icon: "./svg/pigeon-like.svg", title: "pigeon-like" },
  ];
  const birdShapeRadios = birdShapes.map((shape) => (
    <div key={shape.id} className='flex flex-col justify-center items-center'>
      <img src={shape.icon} className='max-w-[100px]' />
      <input
        type='radio'
        id={shape.title}
        name='inputShape'
        value={shape.title}
        onChange={props.handleChange}
        className='h-10 w-10 rounded--full'
      />
      <label htmlFor={shape.title}>
        {shape.title[0].toUpperCase() + shape.title.slice(1)}
      </label>
    </div>
  ));
  return (
    <div>
      <h3 className='font-bold text-2xl text-center'>Shape</h3>
      <div className='flex justify-around items-center w-[90%] mx-auto md:max-w-[800px]'>
        {birdShapeRadios}
      </div>
    </div>
  );
}
