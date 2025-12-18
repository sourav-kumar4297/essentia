'use client';

export default function TwoColumnSection({ image, content, imageFirst = false }) {
  const imageCol = (
    <div className="w-full h-80 md:h-96 rounded-lg overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300 dark:from-slate-700 dark:to-slate-800">
      {image && (
        <img 
          src={image} 
          alt="Section" 
          className="w-full h-full object-cover"
        />
      )}
    </div>
  );

  const contentCol = (
    <div className="space-y-4">
      {content.map((para, idx) => (
        <p key={idx} className="text-gray-700 dark:text-gray-300 leading-relaxed">
          {para}
        </p>
      ))}
    </div>
  );

  return (
    <div className="w-full py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {imageFirst ? (
            <>
              {imageCol}
              {contentCol}
            </>
          ) : (
            <>
              {contentCol}
              {imageCol}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
