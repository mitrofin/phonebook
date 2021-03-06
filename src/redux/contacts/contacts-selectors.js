export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;
export const getIsLoading = state => state.contacts.loading;
export const getError = state => state.contacts.error;

export const getFilteredContacts = state =>
  getContacts(state).filter(({ name }) =>
    name.toLowerCase().includes(getFilter(state).toLowerCase()),
  );

/* const getFilteredContactsList = (allcontacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return allcontacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  }; */
