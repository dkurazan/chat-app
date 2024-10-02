import MessagesWindow from "./MessagesWindow";
import MessageInput from "./MessageInput";

export default function MessengerContainer() {
  return (
    <div className="md:min-w-[450px] flex flex-col">
      <>
        <div className="bg-slate-500 px-4 py-2 mb-2">
          <span className="label-text">To:</span> <span className="text-gray-900 font-bold">John Doe</span>
        </div>

        <MessagesWindow />
        <MessageInput />
      </>
    </div>
  )
}
