import { navItems, navItems2 } from "../static/navItems";

export const getNavItem = (pathname) => {
  const isPathMatching = (path) => {
    if (path === "/") return pathname === path;
    return pathname.startsWith(path);
  };
  const navItem = [...navItems, ...navItems2].find((item) =>
    isPathMatching(item.path)
  );

  return navItem;
};

export const getChildNavItem = (pathname) => {
  const isPathMatching = (path) => {
    if (path === "/") return pathname === path;
    return pathname.startsWith(path);
  };

  const navItem = [...navItems, ...navItems2].find((item) =>
    isPathMatching(item.path)
  );

  let childItem;
  let nestedChildItem;

  // const ch = navItem?.children || [];
  // const ch2 = navItem.children2 || [];
  // ch.push(...ch2);

  const ch = [...(navItem?.children || []), ...(navItem?.children2 || [])];

  ch?.forEach((child) => {
    if (child.path === pathname) {
      childItem = child;
    }

    // console.log(child, pathname);
    // if (child.path === pathname) {
    //   childItem = child;
    // } else if (isPathMatching(child.path)) {
    //   // title = child.title;
    //   childItem = {
    //     ...child,
    //     nested: true,
    //   };
    // }
    child.children?.forEach((child1) => {
      // console.log(child.children, "child.children", child);
      if (child1.children) {
        child1.children.forEach((c) => {
          if (c.children) {
            c.children.forEach((cc) => {
              if (cc.path === pathname) {
                // console.log(cc.path, pathname, "sdlkfjkldfj", child);
                childItem = child;
                nestedChildItem = cc;
              } else if (isPathMatching(cc.path) && !childItem) {
                childItem = {
                  ...child,
                  nested: true,
                };
                nestedChildItem = cc;
              }
            });
          } else {
            if (c.path === pathname) {
              childItem = child;
              nestedChildItem = c;
            } else if (isPathMatching(c.path) && !childItem) {
              childItem = {
                ...child,
                nested: true,
              };
              nestedChildItem = c;
            }
          }
        });
      } else {
        if (child1.path === pathname) {
          childItem = child1;
        } else if (isPathMatching(child1.path) && !childItem) {
          childItem = {
            ...child1,
            nested: true,
          };
        }
      }
    });
  });

  return { childItem, navItem, nestedChildItem };
};
