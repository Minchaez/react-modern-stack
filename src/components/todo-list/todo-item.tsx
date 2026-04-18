export default function TodoItem({
  id,
  content,
}: {
  id: number;
  content: string;
}) {
  return (
    <div>
      {content}
      <button>삭제</button>
    </div>
  );
}
