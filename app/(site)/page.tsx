import Header from "@/components/Header";
import ListItem from "@/components/ListItem";

const Home = () => {
  return (
    <div className='bg-neutral-900 rounded-lg overflow-hidden overflow-y-auto h-full w-full'>
      <Header>
        <div className='mb-2'>
          <h1 className='text-white font-semibold text-3xl'>Welcome back</h1>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 mt-4'>
          <ListItem image='/images/liked.png' name='Liked Songs' href='liked' />
        </div>
      </Header>
      <div className='mt-2 mb-7 px-6'>
        <div className='flex justify-between items-center'>
          <h1 className='font-semibold text-white text-2xl'>Newest Songs</h1>
        </div>
        <div>List on songs</div>
      </div>
    </div>
  );
};

export default Home;
