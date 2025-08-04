export default function Locations() {
  const locations = [
    {
      name: 'Phoenix',
      address: '3201 W. Peoria Ave Suite D704',
      city: 'Phoenix, AZ 85029',
      phone: {
        number: '(480) 233-0457',
        tel: '4802330457'
      }
    },
    {
      name: 'Litchfield Park',
      address: '13575 W. Indian School Rd Suite 800',
      city: 'Litchfield Park, AZ 85340',
      phone: {
        number: '(480) 233-0457',
        tel: '4802330457'
      }
    },
    {
      name: 'Yuma',
      address: '2503 S. Ave A Suite 1',
      city: 'Yuma, AZ 85364',
      phone: {
        number: '(928) 276-4398',
        tel: '9282764398'
      }
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {locations.map((location) => (
            <div
              key={location.name}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {location.name}
              </h3>
              <address className="not-italic text-gray-600">
                <p>{location.address}</p>
                <p className="mb-3">{location.city}</p>
                <a 
                  href={`tel:${location.phone.tel}`}
                  className="inline-flex text-blue-600 hover:text-blue-800 transition-colors duration-200"
                  aria-label={`Call ${location.name} office at ${location.phone.number}`}
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="currentColor" 
                    className="w-5 h-5 mr-2"
                  >
                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                  </svg>
                  {location.phone.number}
                </a>
              </address>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}