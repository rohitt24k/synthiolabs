import Chat from "./components/Chat";
import ChatMessageFrame from "./components/ChatMessageFrame";
import Gradient from "./components/Gradient";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { useCallStore } from "./store/useCallStore";

function App() {
  const { isCalling } = useCallStore();
  return (
    <div className=" bg-bg-01 h-screen flex flex-col font-family-geist ">
      <Gradient />
      <div className=" h-screen overflow-hidden flex flex-col relative z-[2] ">
        <Header />
        <section className=" flex-1 flex gap-3 px-4 sm:px-8 lg:px-20 py-4 overflow-hidden ">
          <>
            <Sidebar className=" max-md:hidden " />
          </>
          <main className=" h-full overflow-hidden flex-1 flex flex-col ">
            <Chat>
              <Chat.ShowChatHeader />
              {isCalling ? <Chat.VideoCallFrame /> : <ChatMessageFrame />}
            </Chat>
          </main>
        </section>
      </div>
    </div>
  );
}

export default App;
