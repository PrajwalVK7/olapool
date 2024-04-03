import React, { useContext, useState } from 'react';
import Menu from './Menu';
import Submenu from './Submenu';
import { ActiveComponent, SubmenuContext } from '../context/contextShare';

function Home() {
  const { menu } = useContext(SubmenuContext);
  const { component } = useContext(ActiveComponent);
  const [showSubmenu, setShowSubmenu] = useState(false);
  const [showMenu, setShowMenu] = useState(true);
  const [showComponent, setShowComponent] = useState(false);

  const handleMenuItemClick = () => {
    setShowSubmenu(true);
    setShowMenu(false);
  };

  const handleSubmenuItemBack = () => {
    setShowSubmenu(false);
    setShowComponent(false);
    setShowMenu(true);
  };

  const handleSubmenuComponentClick = () => {
    setShowComponent(true);
  };

  const handleSubmenuClick = () => {
    if (!showComponent) {
      setShowComponent(true);
    }
  };

  const isSmallScreen = window.innerWidth < 768;

  return (
    <div className="grid lg:grid-cols-4 sm:grid-cols- sm:h-screen">
      {(isSmallScreen && showMenu) || !isSmallScreen ? (
        <div className="px-5 col-span-1 border-e-2 border-zinc-300">
          <Menu onMenuItemClick={handleMenuItemClick} />
        </div>
      ) : null}
      {showSubmenu && (
        <div className="sm:col-span-3 bg-stone-100">
          <div className="container mx-auto">
            {showComponent && (
              <div className='flex lg:justify-end sm:justify-center xs:justify-center lg:py-3 sm:py-2 justify-center'>
                <div className='grid lg:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1 lg:gap-5 sm:gap-3 xs:gap-3'>
                  <div className='col-span-1 mt-3 flex'>
                    <select className='w-48' name="cars" id="cars">
                      <option value="volvo">All</option>
                      <option value="saab">Saab</option>
                      <option value="mercedes">Mercedes</option>
                      <option value="audi">Audi</option>
                    </select>
                  </div>
                  <div className='col-span-1 mt-3 flex'>
                    <select className='w-48' name="cars" id="cars">
                      <option value="volvo">All</option>
                      <option value="saab">Saab</option>
                      <option value="mercedes">Mercedes</option>
                      <option value="audi">Audi</option>
                    </select>
                  </div>
                  <div className='col-span-1 mt-3 flex'>
                    <select className='w-48' name="cars" id="cars">
                      <option value="volvo">All</option>
                      <option value="saab">Saab</option>
                      <option value="mercedes">Mercedes</option>
                      <option value="audi">Audi</option>
                    </select>
                  </div>
                </div>
              </div>
            )}
            <section id="">
              <div className="grid lg:grid-cols-4 sm:grid-cols-1">
                {(!showComponent && isSmallScreen) || !isSmallScreen ? (
                  <div className="col-span-1 p-3" onClick={handleSubmenuClick}>
                    <button className="bg-blue-100 text-black px-4 py-2 rounded-lg" onClick={handleSubmenuItemBack}><i className="fa-solid fa-arrow-left"></i></button>
                    <Submenu onSubmenuItemBack={handleSubmenuItemBack} />
                  </div>
                ) : null}
                {showComponent && (
                  <div className="col-span-3  bg-white rounded-md mt-3 me-3 mb-3 p-3">
                    <button className=" bg-blue-100 text-black px-4 py-2 rounded-lg" onClick={handleSubmenuItemBack}><i className="fa-solid fa-arrow-left"></i></button>
                    {component}
                  </div>
                )}
              </div>
            </section>
          </div>
        </div>
      )}
      {(!showSubmenu || !showComponent) && (
        <div className="hidden lg:block lg:col-span-1">
          <p className='text-center '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero tenetur voluptatem dolores. Libero at aspernatur suscipit quis eius eligendi beatae sit placeat. Nulla illo iusto id, laboriosam sunt rem recusandae.</p>

        </div>
      )}
    </div>
  );
}

export default Home;
