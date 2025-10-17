import Chat from "./components/Chat";
import ChatMessageFrame from "./components/ChatMessageFrame";
import Gradient from "./components/Gradient";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import VideoCallFrame from "./components/VideoCallFrame";

function App() {
  return (
    <div className=" bg-bg-01 h-screen flex flex-col font-family-geist ">
      <Gradient />
      <div className=" h-screen overflow-hidden flex flex-col relative z-[2] ">
        <Header />
        <section className=" flex-1 flex gap-3 px-20 py-4 overflow-hidden ">
          <Sidebar />
          <main className=" h-full overflow-hidden flex-1 flex flex-col ">
            <Chat>
              <Chat.Header />
              {/* <VideoCallFrame /> */}
              <ChatMessageFrame />
            </Chat>
          </main>
        </section>
      </div>
    </div>
  );
}

export default App;
