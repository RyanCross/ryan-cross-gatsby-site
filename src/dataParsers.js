/**
 * Parses pinned repository data from github into a cleaner format than the raw GraphQL data
 */
export const parsePinnedRepositories = (data) => {
    let repos = [];
    let pinnedRepositories = {};

    data.githubData.data.user.pinnedItems.nodes.forEach(element => {
        let pinnedItem = {};

        pinnedItem.id = element.id;
        pinnedItem.name = element.name;
        pinnedItem.description = element.description;
        pinnedItem.languages = element.languages;
        pinnedItem.watcherCount = element.watchers.totalCount;

        repos.push(pinnedItem);
    });

    pinnedRepositories.repos = repos;
    return pinnedRepositories;

}