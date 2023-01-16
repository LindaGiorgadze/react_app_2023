const nav = [
  {
    value: "Home",
    id: 1,
    link: ''
  },
  {
    value: "About",
    id: 2,
    link: 'about'
  },
  {
    value: "Contact",
    id: 3,
    link: 'contact'
  }
];

const Header = (params) => {
  return (
    <header className="App-header">
      <nav>
        <ul>
          {nav
            // .filter((item) => item.value === "Home")
            .map((li, index) => {
              return (
                <li key={li.id}>
                  <a href={`/${li.link}`}>{li.value}</a>
                </li>
              );
            })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
