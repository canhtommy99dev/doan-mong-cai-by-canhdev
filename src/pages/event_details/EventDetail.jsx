const EventDetail = ({ eventId }) => {
  const eventData = {
    1: { name: "Tech Conference", date: "2025-06-10", location: "New York" },
    2: { name: "Music Festival", date: "2025-07-15", location: "Los Angeles" },
    3: { name: "Art Exhibition", date: "2025-08-20", location: "Paris" },
  };

  const event = eventData[eventId];

  if (!event) {
    return <div>Event not found.</div>;
  }

  return (
    <div>
      <h2>{event.name}</h2>
      <p>Date: {event.date}</p>
      <p>Location: {event.location}</p>
    </div>
  );
};

export default EventDetail;
