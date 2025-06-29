export default function VideoPlayer({ url }) {
  return (
    <div className="aspect-w-16 aspect-h-9 mt-6">
      <iframe
        src={url}
        title="Product Video"
        allowFullScreen
        className="w-full h-full rounded-md shadow-lg"
      />
    </div>
  );
}
