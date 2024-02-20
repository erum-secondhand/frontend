import NavBar from '../components/NavBar';
import filterIcon from '../assets/filter.svg';
import upDownArrow from '../assets/upDownArrow.svg';
import PostCard from '../components/PostCard';

function MainPage() {
  return (
    <>
      <NavBar />
      <div className="flex w-full flex-col px-6">
        {/* 필터 및 정렬 */}
        <div className="flex w-full items-center justify-between py-6">
          {/* 필터 버튼 */}
          <button
            className="flex items-center rounded-md border-[1px] border-black px-4 py-2"
            type="button"
          >
            <img src={filterIcon} alt="filter" />
            <span className="font-Pretendard ps-[0.625rem] text-sm font-semibold">
              필터
            </span>
          </button>
          {/* 정렬 */}
          <button
            className="flex w-40 items-center justify-between rounded-lg border-[1px] border-gray-300 px-3 py-2 text-[13px] font-semibold"
            type="button"
          >
            <span className="">가격순</span>
            <img src={upDownArrow} alt="upDownArrow" className="" />
          </button>
        </div>
        {/* 포스트 카드 */}
        <div className="mx-auto my-0 mt-8 flex w-full flex-wrap justify-between text-left">
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
      </div>
    </>
  );
}

export default MainPage;
