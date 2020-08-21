import { useEffect, useState } from 'react';

export default function useGuest(invitations) {
  const [loading, setLoading] = useState(true);
  const [guest, setGuest] = useState(null);

  useEffect(() => {
    console.log(invitations);
    if (!invitations || !invitations.length) {
      return;
    }

    const { search } = window.location;
    const alias = search.replace('?', '').trim();

    setGuest(invitations.find((invite) => invite.alias === alias));
    setLoading(false);
  }, [invitations]);

  return { guest, loading };
}
