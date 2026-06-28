function Title(props) {
  return (
    <h1 className="text-4xl md:text-5xl lg:text-6xl text-center
    font-medium font-stack text-shadow-lg text-shadow-black
    hover:cursor-default py-6 px-10 md:pb-10"
    >
      {props.children}
    </h1>
  );

  // tudo que for conteúdo dentro de uma tag
  // é chamado de props.children
}

export default Title;
