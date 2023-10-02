import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudArrowDown } from '@fortawesome/free-solid-svg-icons';

// Exports
export default function PosterFooter() {
  return (
    <div className="flex justify-center relative pb-2 z-10">
      <SetDownloadButton />
    </div>
  );
}

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------

function SetDownloadButton() {
  const reminderUrl = generateReminderUrl({
    date: "20210915T010000Z",
    text: "Dune - Movie Premiere",
    location: "http://moviedates.info",
    details: "This reminder was created through http://moviedates.info",
  });

  return (
    <a
      className="flex items-center py-1 px-2 rounded-full mx-auto text-white bg-red-500 hover:bg-red-700"
      href={reminderUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
       {/* Put a button to download and another one to see online XDD*/}
      <FontAwesomeIcon icon={faCloudArrowDown} className="w-6 h-6" />
      <div className="text-sm text-white ml-2">Download</div>
    </a>
  );
}

function generateReminderUrl({ date, text, location, details }) {
  const encodedText = encodeURIComponent(text);
  const encodedLocation = encodeURIComponent(location);
  const encodedDetails = encodeURIComponent(details);
  return `http://www.google.com/calendar/event?action=TEMPLATE&dates=${date}%2F${date}&text=${encodedText}&location=${encodedLocation}&details=${encodedDetails}`;
}
