# # 设置项目名称
# project(web_frontend)
SET(PROJ_NAME web_frontend)

# 查找Node.js可执行文件
find_program(NODE_EXECUTABLE NAMES node nodejs)
if(NOT NODE_EXECUTABLE)
    message(FATAL_ERROR "Node.js not found!")
endif()

# 查找npm可执行文件
find_program(NPM_EXECUTABLE NAMES npm)
if(NOT NPM_EXECUTABLE)
    message(FATAL_ERROR "npm not found!")
endif()

# 定义自定义目标来构建Vue项目
add_custom_target(
    web_build ALL
    COMMAND ${NPM_EXECUTABLE} install
    COMMAND ${NPM_EXECUTABLE} run build
    WORKING_DIRECTORY ${CMAKE_CURRENT_SOURCE_DIR}
    COMMENT "Building Vue.js project"
)

# 将构建后的文件复制到package/bin/web目录
add_custom_command(
    TARGET web_build
    POST_BUILD
    COMMAND ${CMAKE_COMMAND} -E make_directory ${PROJECT_SOURCE_DIR}/package/bin/web
    COMMAND ${CMAKE_COMMAND} -E copy_directory
    ${CMAKE_CURRENT_SOURCE_DIR}/dist
    ${PROJECT_SOURCE_DIR}/package/bin/web
    COMMENT "Copying built files to ${CMAKE_BINARY_DIR}/package/bin/web"
)

# 添加调试信息
message(STATUS "Current source directory: ${CMAKE_CURRENT_SOURCE_DIR}")
message(STATUS "Project source directory: ${CMAKE_SOURCE_DIR}")
message(STATUS "Binary directory: ${CMAKE_BINARY_DIR}")

# 检查dist目录是否存在
if(NOT EXISTS ${CMAKE_CURRENT_SOURCE_DIR}/dist)
    message(WARNING "dist directory does not exist. Make sure the Vue.js build process is successful.")
endif()

# 检查目标目录是否存在
if(NOT EXISTS ${CMAKE_BINARY_DIR}/package/bin/web)
    message(WARNING "Target directory does not exist after copy. Check permissions and paths.")
endif()