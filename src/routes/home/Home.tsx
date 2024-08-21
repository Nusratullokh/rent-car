import Cars from "../../components/cars/Cars";
import { useGetCarsQuery } from "../../redux/api/car-api"

const Home = () => {
    const {data, isLoading} = useGetCarsQuery();

    console.log(data?.payload)

  return (
    <div className="container flex items-center m-auto justify-between pl-[50px]">
        <Cars data={data?.payload} isLoading={isLoading} title={"Popular cars"} />
    </div>
  )
}

export default Home