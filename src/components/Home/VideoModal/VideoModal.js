import React, { useState } from 'react';
import NormalVideo from '../../../assets/video/demo.webm'
import IOSVideo from '../../../assets/video/demo.mp4'

// const DemoModal = ({ isOpen, onClose }) => {
//     const videoUrl = 'URL_TO_YOUR_VIDEO_FILE.mp4'; // Update with your video URL
  
//     if (!isOpen) return null;
  
//     return (
//       <div className="fixed inset-0 z-50 flex items-center justify-center">
//         <div className="bg-black bg-opacity-70 absolute inset-0" onClick={onClose}></div>
//         <div className="bg-white p-4 rounded-lg shadow-lg z-10">
//           <video controls autoPlay>
//             <source src={videoUrl} type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//         </div>
//       </div>
//     );
//   };

function VideoModal() {
    const modalStyles = 'fixed top-0 left-0 w-full h-full flex items-center justify-center p-10';
    const backdropStyles = 'fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 p-10';
    const contentStyles = 'bg-white rounded-lg p-8';
    const closeButtonStyles = 'absolute top-5 right-5 text-white cursor-pointer hover:shadow-lg hover:scale-110 transition-all duration-300 ease-in-out';
    const [showModal, setShowModal] = useState(false);
    // const isIOS = /iPad|iPhone|iPod/.test(navigator.platform);
    return (
    <>
      <div className="WatchADemo text-neutral-200 text-lg font-medium hover:shadow-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer" onClick={() => setShowModal(true)}>
        Watch a demo
      </div>

      {showModal && (
        <div className='z-20'>
            <div className={backdropStyles} onClick={() => setShowModal(false)} />
            <div className={modalStyles}>
                <div className={contentStyles}>
                    <div className={closeButtonStyles} onClick={() => setShowModal(false)}>X</div>
                    <video controls autoPlay>
                        {/iPad|iPhone|iPod/.test(navigator.userAgent) ? (
                            <source src={IOSVideo} type="video/mp4" />
                        ) : (
                            <source src={NormalVideo} type="video/webm" />
                        )}
                    </video>
                </div>
            </div>
        </div>
      )}
    </>
    )
}

export default VideoModal