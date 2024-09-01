import treatment from "../assets/treatment.svg";
import { cities } from "../assets/cities";

const Treatment = () => {
  return (
    <div className="text-black font-Poppins">
      <h1 className="text-4xl m-5">About Treatment X</h1>
      <img src={treatment} alt="" className="h-[400px] ml-5" />
      <p className="p-5">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima iste,
        fugiat voluptate soluta reiciendis sed, ipsum sequi nobis magnam ea
        quisquam unde at error asperiores voluptates provident molestias placeat
        tenetur? Sunt neque similique, aliquid distinctio molestias veritatis
        eligendi qui. Pariatur, delectus omnis! Eum odit alias placeat enim
        atque, sit voluptas aliquam corrupti pariatur quam expedita reiciendis
        accusantium facere dolorum rerum quis odio saepe recusandae? Velit, iure
        voluptatem officia iste esse rerum odio quae fugit qui dolorum debitis
        voluptatibus adipisci impedit mollitia magni placeat eveniet cumque
        quasi aliquid voluptate in. Sed doloribus iusto harum natus. Maxime
        dolores repellendus minima dolor consequatur?
      </p>

      <h2 className="text-2xl m-5">Top Cities Offering This Treatment</h2>
      <div className="mb-5">
        <ul className="bg-[#052560] flex list-none w-[770px] ml-5 p-2 rounded-lg">
          <li>
            <div className="w-[250px] hover:bg-[#062d75] cursor-pointer rounded-md p-2 text-white flex flex-col justify-center items-center">
              {<img src={cities[0].logo} alt="" className="w-[40px]" />}
              <p>{cities[0].name}</p>
            </div>
          </li>
          <li>
            <div className="w-[250px] hover:bg-[#062d75] cursor-pointer rounded-md p-2 text-white flex flex-col justify-center items-center">
              {
                <img
                  src={cities[1].logo}
                  alt=""
                  color="white"
                  className="w-[40px]"
                />
              }
              <p>{cities[1].name}</p>
            </div>
          </li>
          <li>
            <div className="w-[250px] hover:bg-[#062d75] cursor-pointer rounded-md p-2 text-white flex flex-col justify-center items-center">
              {
                <img
                  src={cities[2].logo}
                  alt=""
                  color="white"
                  className="w-[40px]"
                />
              }
              <p>{cities[2].name}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Treatment;
