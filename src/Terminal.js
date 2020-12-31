function Terminal() {
  return (
    <div className="bg-gray-900 rounded p-6 mt-10 lg:mt-16"> 
      <div className="flex space-x-2 mb-4">
        <div className="h-2 w-2 rounded-full bg-red-500"></div>
        <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
        <div className="h-2 w-2 rounded-full bg-green-500"></div>
      </div>
      <ul className="text-gray-300 leading-relaxed">
        <li> <span className="text-yellow-500"> → </span> git clone https://github.com/naimul-haque/react-deployment-on.surge.sh.git </li>
        <li> <span className="text-yellow-500"> → </span> cd react-deployment-on.surge.sh </li>
        <li> <span className="text-yellow-500"> → </span> rm -rf .git </li>
        <li> <span className="text-yellow-500"> → </span> git remote add origin https://github.com/user/repo.git</li>
        <li className="text-gray-500 text-sm mt-3"> # Add or modify components </li>
        <li className="text-gray-500 text-sm mb-3"> # Create SURGE_TOKEN and SURGE_DOMAIN in repository secrets </li>
        <li> <span className="text-yellow-500"> → </span> git add . </li>
        <li> <span className="text-yellow-500"> → </span> git commit -m "Initial Commit" </li>
        <li> <span class="text-yellow-500"> → </span> git branch -M main </li>
        <li> <span className="text-yellow-500 font-semibold"> → </span> git push -u origin main </li>
      </ul>
    </div>
  );
}

export default Terminal;