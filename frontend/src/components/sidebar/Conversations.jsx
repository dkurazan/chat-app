import useGetConversations from "../../hooks/useGetConversations";
import Conversation from "./Conversation";
import { getRandomEmoji } from "../../utils/emojis";
import useConversation from "../../store/useConversation";

export default function Conversations() {
  const { loading, conversations } = useGetConversations();
  const { startSearching, selectedConversation } = useConversation();

  return (
    <div className="py-2 flex flex-col overflow-auto">
      {loading && <span className="loading loading-spinner"></span>}
      {startSearching && (
        <Conversation
          key={selectedConversation._id}
          conversation={selectedConversation}
          emoji={getRandomEmoji()}
        />
      )}
      {(!loading && !startSearching) &&
        conversations.map((conversation, idx) => (
          <Conversation
            key={conversation._id}
            conversation={conversation}
            emoji={getRandomEmoji()}
            lastIdx={idx === conversations.length - 1}
          />
        ))}
    </div>
  );
}
