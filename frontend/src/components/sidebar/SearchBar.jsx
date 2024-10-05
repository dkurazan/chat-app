import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import useConversation from "../../store/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const { setSelectedConversation, startSearching, setStartSearching } =
    useConversation();
  const { conversations } = useGetConversations();

  const handleSubmit = (e) => {
    e.preventDefault();
    

    if (!search) return setStartSearching(false);

    if (search.length < 3) {
      setStartSearching(false);
      return toast.error("Search term must be at least 3 characters long");
    }

    if (startSearching) {
      setSearch("");
      return setStartSearching(false);
    }

    const conversation = conversations.find((c) =>
      c.fullName.toLowerCase().includes(search.toLowerCase())
    );

    if (conversation) {
      setSelectedConversation(conversation);
      setStartSearching(true);
    } else {
      setStartSearching(false);
      toast.error("No such user found");
    }
  };

  return (
    <form className="flex items-center gap-2" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search..."
        className="input input-bordered rounded-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        readOnly={startSearching}
      />
      <button type="submit" className="btn btn-circle bg-sky-500 text-white">
        { startSearching ? <RxCross1 /> : <IoSearchSharp />}
      </button>
    </form>
  );
}
