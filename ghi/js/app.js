function createCard(name, description, pictureUrl, location, start, end) {
    return `
      <div class="card">
        <div class = "col-6 col-md-4">
            <div class = "w-100">
                    <div class="shadow p-3 mb-5 bg-body rounded">
                        <div class="card">

                        <div class="card-body">
                        <h5 class="card-title">${name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${location}</h6>
                        <p class="card-text">${description}</p>
                        <img src="${pictureUrl}" class="card-img-top">
                        <div class="card-footer">${start}-${end}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
  }

  window.addEventListener('DOMContentLoaded', async () => {

    const url = 'http://localhost:8000/api/conferences/';

    try {
      const response = await fetch(url);

      if (!response.ok) {
        // Figure out what to do when the response is bad
      } else {
        const data = await response.json();

        for (let conference of data.conferences) {
          const detailUrl = `http://localhost:8000${conference.href}`;
          const detailResponse = await fetch(detailUrl);
          if (detailResponse.ok) {
            const details = await detailResponse.json()
            const name = details.conference.name
            const description = details.conference.description
            const pictureUrl = details.conference.location.picture_url
            const location = details.conference.location.name
            const start = new Date(details.conference.starts)
            const end = new Date(details.conference.ends)
            const html = createCard(name, description, pictureUrl, location, start.toLocaleDateString(), end.toLocaleDateString())
            const column = document.querySelector('.row')
            column.innerHTML += html
            //console.log(html);
          }
        }

      }
    } catch (e) {
        console.error(e);
      // Figure out what to do if an error is raised
    }

  });
